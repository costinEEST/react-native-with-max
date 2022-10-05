- Install an [Android](https://docs.expo.dev/workflow/android-studio-emulator) emulator then set up the [environment variables](https://youtu.be/ZGIU5aIRi9M?t=480)
- Check the `adb` version:

```bash
~/AppData/Local/Android/Sdk/platform-tools$ ./adb.exe version
```
- Core [components](https://reactnative.dev/docs/intro-react-native-components#core-components)
- The [`<View>`](https://reactnative.dev/docs/view) allows you to group other components together, structure them (i.e. provide a layout) and (optionally) add some container styling
- The default styling/layout behavior of a `<View>` component uses [Flexbox](https://reactnative.dev/docs/flexbox) to organize its child components
- [`alignItems`](https://reactnative.dev/docs/flexbox#align-items) positions elements along the cross axis. For `flexDirection: 'column'`, the cross axis is the horizontal axis
- The core difference between `<FlatList>` and `<ScrollView>` is that [FlatList](https://bionicjulia.com/blog/react-native-scrollview-gotchas) optimizes scrolling by only rendering what's required. Sometimes you might want to use [`<RecyclerListView>`](https://blog.logrocket.com/recyclerlistview-vs-flatlist-long-lists-react-native)
- Define a new Expo [entry point](https://stackoverflow.com/a/58954195/1904223)
- Debug RN with [`react-devtools`](https://reactnative.dev/docs/debugging#react-developer-tools)
- Toggle menu (press `m` or `Command D` on iOS or `Control M` on Android)
- [`elevation`](https://reactnative.dev/docs/view-style-props#elevation-android) style prop adds a drop shadow to the item and affects z-order for overlapping views. O iOS devices it can be replicated using the [`shadow-`](https://reactnative.dev/docs/shadow-props) style prop 
- [`<ImageBackground>`](https://github.com/facebook/react-native/blob/main/Libraries/Image/ImageBackground.js) source code
- OpenSans: [bold](https://github.com/academind/react-native-practical-guide-code/blob/04-deep-dive-real-app/extra-files/fonts/OpenSans-Bold.ttf), [regular](https://github.com/academind/react-native-practical-guide-code/blob/04-deep-dive-real-app/extra-files/fonts/OpenSans-Regular.ttf)
- Images: [background](https://github.com/academind/react-native-practical-guide-code/blob/04-deep-dive-real-app/code/21-finished/assets/images/background.png), [success](https://github.com/academind/react-native-practical-guide-code/blob/04-deep-dive-real-app/code/21-finished/assets/images/success.png)