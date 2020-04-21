<template>
  <SfHeader
    active-sidebar="activeSidebar"
    @click:cart="toggleCartSidebar"
    @click:account="onAccountClicked"
    :cartItemsQty="cartTotalItems"
    >
    <template #logo>
      <nuxt-link to="/" class="sf-header__logo">
        <SfImage src="/icons/logo.svg" alt="Vue Storefront Next" class="sf-header__logo-image"/>
      </nuxt-link>
    </template>
    <template #navigation>
      <SfHeaderNavigationItem>
        <nuxt-link to="/c/kuchnia">
          KUCHNIA
        </nuxt-link>
      </SfHeaderNavigationItem>
      <SfHeaderNavigationItem>
        <nuxt-link to="/c/lunchboxy">
          LUNCHBOXY
        </nuxt-link>
      </SfHeaderNavigationItem>
      <SfHeaderNavigationItem>
        <nuxt-link to="/c/zabawki">
          ZABAWKI
        </nuxt-link>
      </SfHeaderNavigationItem>
      <SfHeaderNavigationItem>
        <nuxt-link to="/c/jadalnia">
          JADALNIA
        </nuxt-link>
      </SfHeaderNavigationItem>
    </template>
    <template #search>
      <SfSearchBar
      placeholder="szukaj..."
      v-model="searchState.query"
    />
    </template>
  </SfHeader>
</template>

<script>
import { SfHeader, SfImage, SfSearchBar } from '@storefront-ui/vue';
import uiState from '~/assets/ui-state';
import { useCart, useUser, cartGetters } from '@jkawulok/prestashop-composables';
import { computed } from '@vue/composition-api';
const { toggleCartSidebar, toggleLoginModal } = uiState;
import searchState from '~/assets/search-state';

export default {
  components: {
    SfHeader,
    SfImage,
    SfSearchBar
  },
  setup(props, { root }) {
    const { isAuthenticated } = useUser();
    const onAccountClicked = () => {
      isAuthenticated && isAuthenticated.value ? root.$router.push('/my-account') : toggleLoginModal();
    };
    const { cart } = useCart();
    const cartTotalItems = computed(() => {
      const count = cartGetters.getTotalItems(cart.value);
      // TODO: remove once resolved by UI team: https://github.com/DivanteLtd/storefront-ui/issues/922
      return count ? count.toString() : null;
    });

    return {
      cartTotalItems,
      toggleLoginModal,
      onAccountClicked,
      toggleCartSidebar,
      uiState,
      searchState
    };
  }
};
</script>

<style lang="scss" scoped>
.sf-header__logo-image {
  height: 100%;
}
</style>
