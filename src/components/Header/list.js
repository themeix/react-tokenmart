export const list = [
  {
    id: "1",
    title: "Home",
    link: "/",
    submenu: [
      { id: "1", title: "Home V1", link: "/", parentId:"1",  submenu: [] },
      { id: "1", title: "Home V2", link: "/home2",parentId:"1", submenu: [] },
      { id: "1", title: "Home V3", link: "/home3",parentId:"1", submenu: [] },
    ],
  },
  {
    id: "2",
    title: "Explore",
    link: "/explore",
    submenu: [
      { id: "1", title: "Explore v1", parentId:"2",  link: "/explore", submenu: [] },
      { id: "1", title: "Explore v2",parentId:"2",  link: "/explore2", submenu: [] },
      { id: "1", title: "Item Details V1", parentId:"2", link: "/item-single", submenu: [] },
      { id: "1", title: "Item Details V2", parentId:"2", link: "/item-single2", submenu: [] },
      { id: "1", title: "Item Details V3", link: "/item-single3", submenu: [] },
      { id: "1", title: "Wallet", parentId:"2", link: "/wallet", submenu: [] },
    ],
  },

  {
    id: "3",
    title: "Pages",
    link: "/explore",
    submenu: [
      { id: "301", title: "Create Items", link: "/create-item", submenu: [] },
      {
        id: "302",
        title: "Authors",
        link: "#",
        submenu: [
          {
            id: "303",
            title: "Authors",
            link: "/creator-published",
            submenu: [],
          },
          {
            id: "303",
            title: "Author's  Profile",
            link: "/creator-follower",
            submenu: [],
          },

          {
            id: "303",
            title: "Author's  Activity",
            link: "/creator-activity",
            submenu: [],
          },
        ],
      },
      {
        id: "303",
        title: "User",
        link: "#",
        submenu: [
          {
            id: "303",
            title: "Login",
            link: "/login",
            submenu: [],
          },
          {
            id: "303",
            title: "Register",
            link: "/register",
            submenu: [],
          },
          {
            id: "303",
            title: "Forget Password",
            link: "/forget-password",
            submenu: [],
          },
        ],
      },
      {
        id: "304",
        title: "Blog",
        link: "#",
        submenu: [
          { id: "1", title: "Blog Details", link: "/single", submenu: [] },
          { id: "1", title: "Category", link: "/category", submenu: [] },
          { id: "1", title: "Tag", link: "/tag", submenu: [] },
          { id: "1", title: "Blog Grid", link: "/blog", submenu: [] },
        ],
      },
      { id: "305", title: "Contact", link: "/contact", submenu: [] },
      {
        id: "306",
        title: "Term & Condition",
        link: "/term-condition",
        submenu: [],
      },
      { id: "307", title: "404", link: "/404", submenu: [] },
    ],
  },
  {
    id: "4",
    title: "Activity",
    link: "/activity",
    submenu: [],
  },
];
