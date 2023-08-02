import { defineApolloClient } from '@nuxtjs/apollo';

export default defineApolloClient({
        httpEndpoint: "https://sl-sandbox.mybigcommerce.com/graphql",
        httpLinkOptions: {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly9zbGlnaHRpbmcudmVyY2VsLmFwcCIsImh0dHA6Ly9sb2NhbGhvc3QiXSwiZWF0IjoxODg1NjM1MTc2LCJpYXQiOjE2OTAzODI2NjQsImlzcyI6IkJDIiwic2lkIjoxMDAyOTY5NTY5LCJzdWIiOiI3MTU3Z292bDhmcmV6a3Z1aGN5Ymx5YTZkZGR1aHl4Iiwic3ViX3R5cGUiOjIsInRva2VuX3R5cGUiOjF9.J_se3PQK4Ph-bdoLIXUEosYnGVeamlbgVKcb312jf4CP4aWc-LL4rdnRYS_PDnjFZGblyqHElG7JWGXY_lWZjQ",
          },
        },
});
