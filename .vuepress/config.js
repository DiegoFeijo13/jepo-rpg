module.exports = {
  title: 'Jepo RPG',
  description: 'Um cenário para RPGs de mesa criado de jogadores para jogadores.',
  configureWebpack: {
    resolve: {
      alias: {
        '@imgs': '/assets/img'
      }
    }
  },
  themeConfig: {
    logo: '/assets/img/jeporpg-hollow.jpeg',    
    nav: [
      { text: 'Home', link: '/' },      
      { text: 'Calendário', link: '/docs/calendario' },
    ],
    sidebar: [      
      {
        title: 'Compendium',
        collapsable: true,
        children: [
          '/docs/compendium/calendario',
          '/docs/compendium/deuses',
          '/docs/compendium/dragoes',
        ]
      },
      {
        title: 'Goniar',
        collapsable: true,
        children: [
          '/docs/goniar/anoehin',
          '/docs/goniar/skah',
        ]
      },
      {
        title: 'Ilha Pinheiro',
        collapsable: true,
        children: [
          '/docs/ilhapinheiro/pinus',          
        ]
      },
      {
        title: 'Toran',
        collapsable: true,
        children: [
          '/docs/toran/alendar',          
        ]
      },
      {
        title: 'Tubniar',
        collapsable: true,
        children: [
          '/docs/tubniar/ludwig',          
        ]
      },
    ]
  }
}