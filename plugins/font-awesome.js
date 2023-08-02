import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fab } from '@fortawesome/fontawesome-svg-core'
import { faSearch,faBriefcase, faAngleDoubleRight,faAngleDoubleDown,faAngleDoubleUp,faBars,faXmark,faStar ,faMessage, faAngleDown,faCartShopping,faPlus,faMinus,faCartPlus,faArrowRight ,faArrowLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'



library.add(faSearch,faBriefcase, faAngleDoubleRight,faAngleDoubleDown,faAngleDoubleUp,faBars,faXmark,faStar,faMessage ,faAngleDown,faCartShopping,faPlus,faMinus,faCartPlus,faArrowRight,faArrowLeft,faAngleRight)

// library.add(faTwitterSquare, faTwitch, faGithubSquare)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
}) 