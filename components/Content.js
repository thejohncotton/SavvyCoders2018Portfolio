import * as pages from "./pages";
export default function(state) {
    return `
    <div class="container content-area">
    ${pages[state.body]}
     </div>
 ` } 