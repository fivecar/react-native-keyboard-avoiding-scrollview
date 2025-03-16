import React, {forwardRef, useImperativeHandle} from 'react'
import {SectionList, SectionListProps} from 'react-native'
import {
  ExternalKeyboardAvoidingContainerProps,
  KeyboardAvoidingContainer,
  useKeyboardAvoidingContainerProps,
} from './KeyboardAvoidingContainer'
import {generic} from './utils/react'

export interface KeyboardAvoidingSectionListProps<TItem extends {id: string}>
  extends SectionListProps<TItem>,
    ExternalKeyboardAvoidingContainerProps {}

export const KeyboardAvoidingSectionList = generic(
  forwardRef<SectionList, KeyboardAvoidingSectionListProps<any>>(
    (props, ref) => {
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
          ScrollViewComponent={SectionList}
          scrollViewRef={scrollViewRef}
        />
      )
    },
  ),
)
