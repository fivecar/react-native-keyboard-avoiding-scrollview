import React, {forwardRef, useImperativeHandle} from 'react'
import {FlatList, FlatListProps} from 'react-native'
import {
  ExternalKeyboardAvoidingContainerProps,
  KeyboardAvoidingContainer,
  useKeyboardAvoidingContainerProps,
} from './KeyboardAvoidingContainer'
import {generic} from './utils/react'

export interface KeyboardAvoidingFlatListProps<TItem>
  extends FlatListProps<TItem>,
    ExternalKeyboardAvoidingContainerProps {}

export const KeyboardAvoidingFlatList = generic(
  forwardRef<FlatList, KeyboardAvoidingFlatListProps<any>>((props, ref) => {
    const {
      scrollViewRef,
      ...KeyboardAvoidingContainerProps
    } = useKeyboardAvoidingContainerProps(props)

  // Use useImperativeHandle to expose the internal scrollViewRef to the parent
  useImperativeHandle(ref, () => {
    // @ts-expect-error We know it's a scrollview
    return (scrollViewRef!.current as any)?.getScrollResponder() as ScrollView;
  })

    return (
      <KeyboardAvoidingContainer
        {...KeyboardAvoidingContainerProps}
        ScrollViewComponent={FlatList}
        scrollViewRef={scrollViewRef}
      />
    )
  }),
)
