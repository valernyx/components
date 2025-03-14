import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from 'react-bootstrap/Button'
import { Confirm } from '../src'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-confirm-alert/src/react-confirm-alert.css'

storiesOf('Confirm', module)
  .addParameters({
    info: {
      inline: true,
      propTables: [Confirm],
      propTablesExclude: [Button],
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Confirm', () => (
    <div>
      <Button
        color="primary"
        onClick={() => {
          Confirm({
            title: 'Please attention!',
            message: 'Do you want to proceed?',
            ok: {
              callback: () => console.log('yes was clicked'),
              label: 'Yes',
            },
            cancel: {
              callback: () => console.log('no was clicked'),
              label: 'No',
            },
          })
        }}
      >
        Click me!
      </Button>
    </div>
  ))
