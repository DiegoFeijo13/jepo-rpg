module.exports = {
  title: 'Jepo RPG',
  description: 'Um cenário para RPGs de mesa criado de jogadores para jogadores.',  
  themeConfig: {
    logo: '/jeporpg-hollow.jpeg',    
    nav: [
      { text: 'Home', link: '/' },      
      { text: 'Calendário', link: '/calendario' },
    ],
    sidebar: [      
      {
        title: 'Compendium',
        collapsable: true,
        children: [
          '/compendium/calendario',
          '/compendium/deuses',
          '/compendium/dragoes',
          '/compendium/diarios_alexander',
          '/compendium/diarios_azulth'
        ]
      },
      {
        title: 'Personagens',
        collapsable: true,
        children: [
          '/personagens/comitiva_escarlate'
        ]
      },
      {
        title: 'Contos não contados',
        collapsable: true,
        children: [
          '/contos/despertar',
          '/contos/dneeth'
        ]
      },
      {
        title: 'Goniar',
        collapsable: true,
        children: [
          '/goniar/anoehin',
          '/goniar/skah',
        ]
      },
      {
        title: 'Ilha Pinheiro',
        collapsable: true,
        children: [
          '/ilhapinheiro/pinus',          
        ]
      },
      {
        title: 'Toran',
        collapsable: true,
        children: [
          '/toran/alendar',          
        ]
      },
      {
        title: 'Tubniar',
        collapsable: true,
        children: [
          '/tubniar/ludwig',          
        ]
      },
    ]
  }
}