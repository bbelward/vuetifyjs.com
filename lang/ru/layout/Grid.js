export default {
  header: 'Система Grid',
  headerText: 'Vuetify имеет 12-точечную систему сеток. Построенная с использованием <kbd> flex-box </ kbd>, сетка используется для компоновки содержимого приложения. Она содержит 5 типов точек прерывания, которые используются для ориентации определенных размеров экрана или ориентации. Реквизиты для компонентов сетки фактически являются классами, которые получены из их определенных свойств. Это позволяет вам легко указать эти вспомогательные классы в качестве свойства, при этом все еще предоставляя классы для использования в любом месте.',
  components: ['v-container', 'v-layout', 'v-flex', 'v-spacer'],
  toc: [
    {
      text: 'Введение',
      href: 'introduction'
    },
    {
      text: 'Применение',
      href: 'usage'
    },
    {
      text: 'API',
      href: 'api'
    },
    {
      text: 'Дополнительно',
      href: 'supplemental'
    },
    {
      text: 'Примеры',
      href: 'examples'
    },
    {
      text: 'Объект точки останова',
      href: 'breakpoint-object'
    }
  ],
  examples: [{
    grid: {
      header: 'Применение',
      desc: '`v-container` может использоваться для страницы, ориентированной на центр, или с учетом того, что `fluid` prop расширяет свою полную ширину. `v-layout` используется для разделения разделов и содержит` v-flex`. Структура вашего макета будет следующей: **v-container** & raquo; **v-layout** & raquo; **v-флекс**. Каждая часть цепочки сетки представляет собой элемент flex-box. Финал `v-flex` автоматически устанавливает для своих детей <kbd> flex: 1 1 auto </ kbd>.',
      uninverted: true
    },
    offset: {
      header: 'Смещение',
      desc: 'Смещения полезны для компенсации элементов, которые пока не видны. Так же, как и с точками останова, вы можете установить смещение для любых доступных размеров. Это позволяет вам точно настроить макет приложения.',
      uninverted: true
    },
    order: {
      header: 'Порядок',
      desc: 'Вы можете управлять порядком элементов сетки. Как и в случае смещений, вы можете устанавливать разный поряд для разных размеров. Дизайн специализированных макетов экрана, которые подходят для любого приложения.',
      uninverted: true
    },
    directionAndAlign: {
      header: 'Направление и выравнивание',
      desc: 'Назначьте направление и выравнивание различными способами. Все доступные <kbd> flex-box </ kbd> api доступны через интуитивные вспомогательные props.',
      uninverted: true
    },
    rowColumnBreakpoint: {
      header: 'Точки останова строки и столбца',
      desc: 'Динамически изменяйте свой макет на основе разрешения. **(измените размер экрана и посмотрите, как изменится `row` на небольших контрольных точках)**',
      uninverted: true
    },
    nestedGrid: {
      header: 'Nested grid',
      desc: 'Grid могут быть вложенными, подобно другим фреймворкам, для того, чтобы достичь очень настраиваемых макетов.',
      uninverted: true
    },
    uniqueLayouts: {
      header: 'Unique layouts',
      desc: 'Сила и гибкость сетки Vuetify позволяют создавать удивительные пользовательские интерфейсы.',
      uninverted: true
    },
    spacer: {
      header: 'v-spacer',
      desc: 'Компонент `v-spacer` полезно, когда вы хотите заполнить свободное пространство или сделать пространство между двумя компонентами.'
    },
    tags: {
      header: 'Html tags',
      desc: 'Иногда вам нужно указать элемент макета в качестве определенного тега, например, элемент `section` или `li`.'
    }
  }],
  props: {
    tag: 'Mixins.Routable.props.tag',
    alignBaseline: 'Совместите элементы с базовым уровнем.',
    alignCenter: 'Выровняйте предметы по центру.',
    alignContentCenter: 'Совместите содержимое с центром.',
    alignContentEnd: 'Совместите содержимое до конца.',
    alignContentSpaceAround: 'Совместите содержимое с пространством.',
    alignContentSpaceBetween: 'Совместите содержимое с пространством между ними.',
    alignContentStart: 'Совместите содержимое с началом.',
    alignEnd: 'Выровняйте элементы до конца.',
    alignStart: 'Выровняйте элементы до начала.',
    'd-{type}': 'Укажите, чтобы отобразить элемент как flex/inline-flex/block и т. Д. Синтаксис - `d- {type}`. Например, `d-flex`.',
    fillHeight: 'Убедитесь, что высота элемента col заполняется родительским и дочерним. Важно для Safari / Firefox, если дети являются элементом столбца.',
    justifyCenter: 'Выравнять контент по центру.',
    justifyEnd: 'Выравнять контент в конец',
    justifySpaceAround: 'Выравнять контент space around.',
    justifySpaceBetween: 'Выравнять контент space between.',
    justifyStart: 'Выравнять контент start.',
    reverse: 'Отменяет текущее выбранное направление (column, row).',
    wrap: 'Позволяет детям обертываться внутри контейнера, если элементы используют более 100%.',
    'v-container': {
      'grid-list-{xs through xl}': 'Устанавливает gutter между элементами списка сетки в диапазоне от 2 до 24 пикселей',
      fluid: 'Удаляет контрольные точки размера viewport'
    },
    'v-flex': {
      'offset-(size)(1-12)': 'offset-xs: extra small, offset-sm: small, offset-md: medium, offset-lg: large, offset-xl: extra large. Example: offset-xs3',
      'order-(size)(1-12)': 'order-xs: extra small, order-sm: small, order-md: medium, order-lg: large, order-xl: extra large. Example: order-xs3',
      '(size)(1-12)': 'xs: extra small, sm: small, md: medium, lg: large, xl: extra large - 1 through 12'
    },
    'v-layout': {
      row: 'Устанавливает направление смещения в ряд',
      column: 'Устанавливает направление flex в столбец'
    }
  },
  breakpointHeader: 'Объект точки останова',
  breakpointText1: 'Vuetify преобразует доступные точки останова в доступный объект из вашего приложения. Это позволит вам назначать / применять определенные свойства и атрибуты на основе размера viewport. Доступ к объекту можно получить из:',
  breakpointText2: 'Этот объект содержит те же семантические свойства, которые вы уже использовали для использования в grid Давайте попробуем пример реального мира. У вас есть компонент `v-dialog` , который вы хотите преобразовать в **full-screen** на мобильных устройствах. Обычно вам нужно привязывать наблюдателей к размеру viewport и/или проверять каждый раз, когда загружается страница.',
  breakpointText3: 'Это много шаблонов для написания. Даже если вы решите использовать встроенную директиву <a href="/directives/resizing"> v-resize </a>, вам все равно придется определять метод изменения размера. С объектом **breakpoint** вы можете полностью пропустить эту логику и вернуться к созданию своего приложения.'
}