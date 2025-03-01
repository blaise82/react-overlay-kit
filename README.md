# react-overlay-kit

A React package offering customizable overlay components such as dialogs, drawers, and more. The package comes with built-in styles, so you don't need to import external CSS.

SandBox Link: [react-overlay-kit](https://codesandbox.io/p/devbox/mqvl6g)


## Features

- **Dialog Component**: A customizable dialog with support for different positions, draggable functionality, close on ESC, and more.
- **Additional Overlay Components**: Future overlays for different use cases (e.g., notifications, modals, etc.).
- **No Need for External CSS**: All necessary styles are included by default.

## Installation

You can install the package via npm or yarn.

```bash
npm install react-overlay-kit
```

or

```bash
yarn add react-overlay-kit
```

## Usage

Import and use the `Dialog` component (or any future overlays) in your project:

```javascript
import { Dialog } from 'react-overlay-kit';

const YourComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openDialog}>Open Dialog</button>
      <Dialog
        isOpen={isOpen}
        onClose={closeDialog}
        position="center"
        customStyles={{ width: "400px", height: "300px" }}
        escToClose={true}
        showCloseButton={true}
        closeOnClickOutside={true}
        draggable={true}
        autoCloseDelay={5000}  // 5 seconds auto-close delay
      >
        <p>This is a dialog!</p>
      </Dialog>
    </div>
  );
};
```

## Dialog Component Props

### `isOpen` (Required)
- Type: `bool`
- Description: Controls whether the dialog is open or closed.

### `onClose` (Required)
- Type: `func`
- Description: Callback function that will be called to close the dialog.

### `onOpen` (Optional)
- Type: `func`
- Description: Callback function that will be called when the dialog is opened.

### `children` (Required)
- Type: `node`
- Description: Content to be displayed inside the dialog.

### `position` (Optional)
- Type: `oneOf(["left", "right", "top", "bottom", "center"])`
- Default: `"right"`
- Description: Position of the dialog. Can be "left", "right", "top", "bottom", or "center".

### `customStyles` (Optional)
- Type: `object`
- Default: `null`
- Description: Custom CSS styles to apply to the dialog container.

### `escToClose` (Optional)
- Type: `bool`
- Default: `true`
- Description: If true, the dialog will close when the ESC key is pressed.

### `showCloseButton` (Optional)
- Type: `bool`
- Default: `true`
- Description: If true, a close button will be displayed.

### `closeOnClickOutside` (Optional)
- Type: `bool`
- Default: `true`
- Description: If true, the dialog will close when clicked outside.

### `draggable` (Optional)
- Type: `bool`
- Default: `false`
- Description: If true, the dialog will be draggable.

### `autoCloseDelay` (Optional)
- Type: `number`
- Default: `null`
- Description: Time in milliseconds after which the dialog will automatically close if open.

## No CSS Import Required

All necessary CSS styles are included in the package, so there is no need to import external CSS files. You can simply use the components out-of-the-box.

## License

This package is licensed under the MIT License.