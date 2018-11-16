import { lowerCase } from "lodash";
function buildLinks(linkArray) {
    var i = 0;
    var links = "";
    var link = "";
    while (i < linkArray.length) {
        link = lowerCase(linkArray[i]);
      links += `
              <li>
              <a href='/${link}'>${linkArray[i]}</a>
              </li>
          `;
        
      i++;
    }
    return links;
  }

export default function Navigation(state){
    return `
      <div class="navigation">
          <ul>
              ${buildLinks(state.links)}
          </ul>
      </div>
      `;
  }