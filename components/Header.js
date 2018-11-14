export default function Header(state) {
    return `
<div class="container header">
<div id="greeting"></div>
<h1>${state.title}</h1>

</div>
`
}