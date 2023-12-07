# spotlight
package that can be used to create quick spotlight-like tutorials for your web interfaces


## installation

#### npm
`npm i @janarendvw/spotlight`

#### yarn
`yarn add @janarendvw/spotlight`

#### pnpm
`pnpm add @janarendvw/spotlight`

## usage

#### Add elements to the spotlight tour

```html
<div data-spotlight>{...}</div>
```

#### Add a description to the element

```html
<div data-spotlight data-spotlight-description="This is a clickable div element.">{...}</div>
```

#### Order your elements in the spotlight tour

```html
<div data-spotlight data-spotlight-order="1">{...}</div>
<div data-spotlight data-spotlight-order="2">{...}</div>
<div data-spotlight data-spotlight-order="3">{...}</div>
```

