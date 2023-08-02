<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- <div id="wrapper" bg-light text-dark>
    <main p-4>
      <div flex flex-col gap-4>
        <NCard class="p4">
          <div class="n-header-upper">GraphQL API</div>
          <form class="flex gap-3 items-center">
            <NRadio
              v-for="entry of apis"
              :key="entry"
              v-model="api"
              :name="entry"
              :value="entry"
              n="red6 dark:red5"
            >
              {{ entry }}
            </NRadio>
          </form>
        </NCard>

        <template v-if="api === 'github'">
          <GithubDemo />
        </template>
        <template v-else-if="api === 'todos'">
          <TodosDemo />
        </template>
      </div>
    </main>

    <footer border-t-1 border-slate flex justify-center items-center>@nuxtjs</footer>
  </div> -->
</template>

<script lang="ts" setup>
const cookie = useCookie("slighting-token");

  const apiToken = ref(null);

  if (!cookie.value) {
    const { data } = await useFetch(
      'https://api.bigcommerce.com/stores/wemwt7v1oz/v3/storefront/api-token',
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Auth-Token': 'a1g3aza5cnbwavuafieij13yu4iz93p'
        },
        body: {allowed_cors_origins: ["https://slighting.vercel.app", "http://localhost:3000"], channel_id: 1, expires_at: 1885635176},
      }
    );
    apiToken.value = data.value?.data?.token;
    cookie.value = cookie.value || apiToken.value;
  }
</script>

<style scoped>
#wrapper {
  min-height: 100vh;

  display: grid;
  grid-template-rows: 1fr 60px;
}
</style>
