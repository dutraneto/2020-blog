import "lazysizes"
// import "prismjs/themes/prism.css"

if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]', {
      speed: 200,
      offset: 66 // size of the header (sidebar) when mobile
    })
  }
