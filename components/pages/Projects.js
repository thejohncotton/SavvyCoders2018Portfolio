import cyoa from '../../projects/cyoa/cyoa'
export default function() {
    
    return `
    <div class="container content-area">
    <ol>
        <li><button>Class Showcase</button></li>
        <li><button id="cyoaStart" onClick="${cyoa()}">Choose Your Own Adventure</button></li>
        <li><button>Web Store Hack-A-Thon</button></li>
    </ol>
</div>

`
}