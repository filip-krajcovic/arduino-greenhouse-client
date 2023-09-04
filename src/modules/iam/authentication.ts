import { watch } from 'vue';
import { useKeycloak } from '@baloise/vue-keycloak';
import { useUserStore } from '../../stores/users.store';
import { baseUrl } from '../../constants';
import { getLocale } from '@/plugins/i18n';

const redirectUrls = {
  login: `${baseUrl}/`,
  logout: `${baseUrl}/`,
}


export const reloadUserInfo = async () => {
  const { keycloak } = useKeycloak();
  if (keycloak) {
    const profile = await keycloak.loadUserProfile();
    const { id: uuid, username, firstName, lastName, email, emailVerified } = profile;
    const userStore = useUserStore();
    const user = {
      uuid,
      username,
      firstName,
      lastName,
      email,
      emailVerified,
    };
    userStore.$patch({
      user,
    });
  }
}

export const observeAuth = () => {
  const { isAuthenticated } = useKeycloak();
  
  watch(isAuthenticated, () => {
    if (isAuthenticated.value) {
      reloadUserInfo();
    }
  });
}

export const login = () => {
  const { keycloak } = useKeycloak();
  const locale = getLocale() || 'en';
  const { login: redirectUri } = redirectUrls;
  if (keycloak) {
    keycloak.login({
      redirectUri,
      locale,
    });
  }
}

export const logout = () => {
  const { keycloak } = useKeycloak();
  const { logout: redirectUri } = redirectUrls;
  if (keycloak) {
    keycloak.logout({
      redirectUri,
    });
  }
}
