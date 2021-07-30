import React, { Component, useRef } from "react"
import { View, Image } from "react-native"

import DocumentScanner from "@woonivers/react-native-document-scanner"

function ScannerGet(props) {
return (
<View>
    <DocumentScanner
    style={styles.scanner}
    onDocumentScanned={handleOnPictureTaken}
    overlayColor="rgba(255,130,0, 0.7)"
    enableTorch={false}
    quality={0.5}
    detectionCountBeforeCapture={5}
    detectionRefreshRateInMS={50}
    />
</View>
)
}