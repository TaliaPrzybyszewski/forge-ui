export type ComponentGroup = 'Primitives' | 'Motion' | 'Charts' | 'Navigation' | 'Overlay' | 'Feedback' | 'Data'

export interface ComponentMeta {
  id: string
  displayName: string
  group: ComponentGroup
  description: string
  defaultColor: string
  icon: string
  deps?: string[]
}

export const REGISTRY: ComponentMeta[] = [
  { id: 'button',      displayName: 'PrismButton',     group: 'Primitives',  description: 'Spectrum-aware button — 6 variants, ripple, glow states',      defaultColor: '#7F77DD', icon: '⬛' },
  { id: 'card',        displayName: 'PrismCard',       group: 'Primitives',  description: 'Card with bottom-up colour glow on hover',                      defaultColor: '#7F77DD', icon: '▭' },
  { id: 'input',       displayName: 'PrismInput',      group: 'Primitives',  description: 'Input with focus glow and 4 validation states',                 defaultColor: '#7F77DD', icon: '▱' },
  { id: 'badge',       displayName: 'PrismBadge',      group: 'Primitives',  description: 'Status badge with optional pulse dot',                          defaultColor: '#1D9E75', icon: '◉' },
  { id: 'toggle',      displayName: 'PrismToggle',     group: 'Primitives',  description: 'Animated toggle switch with glow on active state',              defaultColor: '#7F77DD', icon: '⬭' },
  { id: 'select',      displayName: 'PrismSelect',     group: 'Primitives',  description: 'Select dropdown with colour-token focus',                       defaultColor: '#7F77DD', icon: '▾' },
  { id: 'checkbox',    displayName: 'PrismCheckbox',   group: 'Primitives',  description: 'Checkbox with animated check and glow',                         defaultColor: '#7F77DD', icon: '☑' },
  { id: 'radio',       displayName: 'PrismRadio',      group: 'Primitives',  description: 'Radio group with colour token',                                  defaultColor: '#7F77DD', icon: '◎' },
  { id: 'slider',      displayName: 'PrismSlider',     group: 'Primitives',  description: 'Range slider with coloured fill track',                         defaultColor: '#7F77DD', icon: '⊣' },
  { id: 'textarea',    displayName: 'PrismTextarea',   group: 'Primitives',  description: 'Textarea with focus glow and character count',                  defaultColor: '#7F77DD', icon: '▤' },
  { id: 'avatar',      displayName: 'PrismAvatar',     group: 'Primitives',  description: 'Avatar with initials, status dot, optional ring',               defaultColor: '#7F77DD', icon: '◎' },
  { id: 'statcard',    displayName: 'PrismStatCard',   group: 'Primitives',  description: 'Metric card with value, delta, and colour bar',                 defaultColor: '#7F77DD', icon: '▣' },
  { id: 'taginput',    displayName: 'PrismTagInput',   group: 'Primitives',  description: 'Tag input — add and remove tags with keyboard',                 defaultColor: '#7F77DD', icon: '⊕' },
  { id: 'datepicker',  displayName: 'PrismDatePicker', group: 'Primitives',  description: 'Calendar date picker with month navigation',                    defaultColor: '#7F77DD', icon: '◫' },
  { id: 'spinner',     displayName: 'PrismSpinner',    group: 'Motion',      description: 'Loading indicator — 5 variants, pure CSS',                      defaultColor: '#7F77DD', icon: '⟳' },
  { id: 'fadeup',      displayName: 'PrismFadeUp',     group: 'Motion',      description: 'Scroll-triggered fade up with per-line stagger',                defaultColor: '#7F77DD', icon: '↑' },
  { id: 'ticker',      displayName: 'PrismTicker',     group: 'Motion',      description: 'Infinite horizontal text ticker',                               defaultColor: '#7F77DD', icon: '⇄' },
  { id: 'morphblob',   displayName: 'PrismMorphBlob',  group: 'Motion',      description: 'Organic CSS morphing blob',                                     defaultColor: '#7F77DD', icon: '◐' },
  { id: 'countup',     displayName: 'PrismCountUp',    group: 'Motion',      description: 'Animated number counter',                                       defaultColor: '#7F77DD', icon: '⓪' },
  { id: 'barchart',    displayName: 'PrismBarChart',   group: 'Charts',      description: 'Bar chart — spectrum colours, animated',                        defaultColor: '#7F77DD', icon: '▦', deps: ['chart.js'] },
  { id: 'linechart',   displayName: 'PrismLineChart',  group: 'Charts',      description: 'Line chart with fill and tension',                              defaultColor: '#1D9E75', icon: '╱', deps: ['chart.js'] },
  { id: 'donut',       displayName: 'PrismDonut',      group: 'Charts',      description: 'Donut chart with centre display',                               defaultColor: '#7F77DD', icon: '◯', deps: ['chart.js'] },
  { id: 'progress',    displayName: 'PrismProgress',   group: 'Charts',      description: 'Progress bar with glow and striped option',                     defaultColor: '#7F77DD', icon: '▬' },
  { id: 'sparkline',   displayName: 'PrismSparkline',  group: 'Charts',      description: 'Compact inline sparkline',                                      defaultColor: '#7F77DD', icon: '╱', deps: ['chart.js'] },
  { id: 'cmdpalette',  displayName: 'PrismCommand',    group: 'Navigation',  description: 'Command palette (⌘K)',                                           defaultColor: '#7F77DD', icon: '⌘' },
  { id: 'navbar',      displayName: 'PrismNavbar',     group: 'Navigation',  description: 'Navigation bar — dark/light, CTA button',                       defaultColor: '#7F77DD', icon: '▬' },
  { id: 'breadcrumb',  displayName: 'PrismBreadcrumb', group: 'Navigation',  description: 'Breadcrumb with custom separator',                              defaultColor: '#7F77DD', icon: '›' },
  { id: 'pagination',  displayName: 'PrismPagination', group: 'Navigation',  description: 'Pagination with ellipsis and count',                            defaultColor: '#7F77DD', icon: '⊡' },
  { id: 'sidenav',     displayName: 'PrismSideNav',    group: 'Navigation',  description: 'Collapsible side navigation',                                   defaultColor: '#7F77DD', icon: '◧' },
  { id: 'tabs',        displayName: 'PrismTabs',       group: 'Navigation',  description: 'Tab bar — underline, pill, line variants',                      defaultColor: '#7F77DD', icon: '⊟' },
  { id: 'modal',       displayName: 'PrismModal',      group: 'Overlay',     description: 'Modal dialog — overlay, ESC to close, actions',                 defaultColor: '#7F77DD', icon: '◨' },
  { id: 'toast',       displayName: 'PrismToast',      group: 'Overlay',     description: 'Toast notification — 4 semantic variants',                      defaultColor: '#1D9E75', icon: '◫' },
  { id: 'tooltip',     displayName: 'PrismTooltip',    group: 'Overlay',     description: 'Tooltip — dark and light, 4 positions',                         defaultColor: '#7F77DD', icon: '◳' },
  { id: 'dropdown',    displayName: 'PrismDropdown',   group: 'Overlay',     description: 'Dropdown menu with icons and danger item',                      defaultColor: '#7F77DD', icon: '▾' },
  { id: 'drawer',      displayName: 'PrismDrawer',     group: 'Overlay',     description: 'Side drawer — left or right, with overlay',                     defaultColor: '#7F77DD', icon: '◁' },
  { id: 'skeleton',    displayName: 'PrismSkeleton',   group: 'Feedback',    description: 'Shimmer skeleton — card, text, profile, table',                 defaultColor: '#7F77DD', icon: '▒' },
  { id: 'alert',       displayName: 'PrismAlert',      group: 'Feedback',    description: 'Alert banner — 4 semantic variants with action',                defaultColor: '#1D9E75', icon: '⚠' },
  { id: 'stepper',     displayName: 'PrismStepper',    group: 'Feedback',    description: 'Multi-step progress — horizontal and vertical',                 defaultColor: '#7F77DD', icon: '⊕' },
  { id: 'accordion',   displayName: 'PrismAccordion',  group: 'Feedback',    description: 'Expandable accordion with smooth animation',                    defaultColor: '#7F77DD', icon: '☰' },
  { id: 'table',       displayName: 'PrismTable',      group: 'Data',        description: 'Data table — striped, hover, colour token',                     defaultColor: '#7F77DD', icon: '⊞' },
]

export const REGISTRY_BY_ID = Object.fromEntries(REGISTRY.map(c => [c.id, c]))

export const GROUPS: ComponentGroup[] = ['Primitives', 'Motion', 'Charts', 'Navigation', 'Overlay', 'Feedback', 'Data']
