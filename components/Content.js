import * as pages from "./pages";
export default function(state) {
    if (state.content){
    return `${state.content}` 
    } else return `
<div class="container content-area">
${pages[state.body]}
    </div>
` } 