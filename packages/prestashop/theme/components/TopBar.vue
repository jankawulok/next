<template>
  <SfTopBar>
    <template #left>
      <LocaleSelector />
    </template>
    <template #right>
      <SfButton
        v-if="!isAuthenticated"
        class="sf-button--text color-secondary"
        @click="toggleLoginModal">
          {{searchState.query}}
      </SfButton>
      <div v-else>
        {{ userGetters.getFullName(user) }} (
          <SfButton
            class="sf-button--text color-secondary"
            @click="logout">
              logout
          </SfButton>
        )
      </div>
    </template>
  </SfTopBar>
</template>

<script>
import { SfButton, SfTopBar } from '@storefront-ui/vue';
import uiState from '~/assets/ui-state';
import searchState from '~/assets/search-state';
import { useUser, userGetters } from '@jkawulok/prestashop-composables';
import LocaleSelector from './LocaleSelector';

const { toggleLoginModal } = uiState;

export default {
  components: { SfTopBar,
    SfButton,
    LocaleSelector },
  setup() {
    const { isAuthenticated, logout, user } = useUser();

    return {
      toggleLoginModal,
      isAuthenticated,
      logout,
      user,
      userGetters,
      searchState
    };
  }
};

</script>
