import React, {forwardRef, useImperativeHandle} from 'react'
import {ScrollView, ScrollViewProps} from 'react-native'
import {
  ExternalKeyboardAvoidingContainerProps,
  KeyboardAvoidingContainer,
  useKeyboardAvoidingContainerProps,
} from './KeyboardAvoidingContainer'

export interface KeyboardAvoidingScrollViewProps
  extends ScrollViewProps,
    ExternalKeyboardAvoidingContainerProps {}

export const KeyboardAvoidingScrollView = forwardRef<
  ScrollView,
  KeyboardAvoidingScrollViewProps
>((props, ref) => {
  const {
    scrollViewRef,
    ...KeyboardAvoidingContainerProps
  } = useKeyboardAvoidingContainerProps(props)

  // Use useImperativeHandle to expose the internal scrollViewRef to the parent
  useImperativeHandle(ref, () => {
    // @ts-expect-error This is how other parts of the codebase use the ref
    return (scrollViewRef!.current as any)?.getScrollResponder() as ScrollView;
  })

  return (
    <KeyboardAvoidingContainer
      {...KeyboardAvoidingContainerProps}
      ScrollViewComponent={ScrollView}
      scrollViewRef={scrollViewRef}
    />
  )
})
