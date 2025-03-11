import {KeyboardMetrics, UIManager} from 'react-native'

export function measureInWindow(node: number) {
  return new Promise<KeyboardMetrics>(resolve => {
    UIManager.measureInWindow(node, (screenX, screenY, width, height) => {
      resolve({screenX, screenY, width, height})
    })
  })
}
