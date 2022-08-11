const NAVLINKS = [
    {
        linkName:'About',
        linkURI:'https://moonrabbit.com/#about'
    },
    {
        linkName:'Technology',
        linkURI:'https://moonrabbit.com/technology/'
    },
    {
        linkName:'Library',
        linkURI:'https://dev.hole.moonrabbit.com/'
    }
]

function createHeader(navArr) {
    const header = document.createElement('header');
    header.className = 'header'
    return header
}
function createNav(navArr) {
    let nav = document.createElement('nav')
    nav.className = 'navigation__bar'
    let navList = document.createElement('ul')
    navList.className = 'navigation__list'
    if (navArr.length > 0) {
        for (let i = 0; i < navArr.length; i++) {
            const element = navArr[i];
            let navItem = document.createElement('li')
            navItem.className = 'navigation__item'
            let navLink = document.createElement('a')
            navLink.className = 'navigation__link'

            if (element.linkName) {
                navLink.innerText = element.linkName
            }else{
                navLink.innerText = 'null'
            }
            if (element.linkURI) {
                navLink.href =  element.linkURI
            }else{
                navLink.href = '#'
            }
            
            

            navItem.appendChild(navLink)
            navList.appendChild(navItem)
            nav.appendChild(navList)
        } 
    }
    return nav
}

function addHeader() {
    const body = document.body
    const header = createHeader(null)
    const navigation = createNav(NAVLINKS)
    header.appendChild(navigation)
    body.appendChild(header)
    findAndSwap(body)
}

function swap (node1, node2) {
    node1.before(node2);
}
function findAndSwap(parent){
    const parentChilds = parent.children
    const node1 = findNode(parentChilds,'book')
    const node2 = findNode(parentChilds,'header')
    swap(node1,node2)
}
function findNode(parent,childClassName){
    let child = find() 
    function find(){
        for (let i = 0; i < parent.length; i++) {
            const element = parent[i];
            if (element.classList.contains(childClassName)) {
                return element
            }  
        }
    }
    return child
}
addHeader()