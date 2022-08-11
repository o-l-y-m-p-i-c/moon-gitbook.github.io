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
        linkName:'Community',
        linkURI:'https://moonrabbit.com/community/'
    },
    {
        linkName:'Hyperaccelerator',
        linkURI:'https://moonrabbit.com/accelerator/'
    },
    {
        linkName:'Blog',
        linkURI:'https://moonrabbit.com/blog/'
    },
    {
        linkName:'Library',
        linkURI:'https://dev.hole.moonrabbit.com/'
    },
    {
        linkName:'NFT',
        linkURI:'https://nft.moonrabbit.com/'
    },
    {
        linkName:'DEFI',
        linkURI:'https://defi.moonrabbit.com/'
    },
    {
        linkName:'DEX',
        linkURI:'https://dex.moonrabbit.com/'
    },
    {
        linkName:'Rabbit Hole',
        linkURI:'https://hole.moonrabbit.com/'
    },
]

const summary = document.querySelector('.book-summary')

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
        } 
        nav.appendChild(navList)
    }
    return nav
}

function addHeader() {
    const body = document.body
    const header = createHeader(null)
    const navigation = createNav(NAVLINKS)
    const openMenuBtn = document.createElement('div')
    openMenuBtn.classList.add('menu_open_btn')
    openMenuBtn.innerHTML = 'Open main menu'
    const logo = document.createElement('a')
    logo.href = "https://moonrabbit.com/"
    logo.classList.add('menu_logo')
    header.appendChild(logo)
    header.appendChild(openMenuBtn)
    header.appendChild(navigation)
    body.appendChild(header)
    findAndSwap(body)
}

function swap (node1, node2) {
    // node1.before(node2);
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


window.onload = () => {
    addHeader()
    document.querySelector('.menu_open_btn').onclick = (e) => {
        e.currentTarget.classList.toggle('active')
    }
    
}