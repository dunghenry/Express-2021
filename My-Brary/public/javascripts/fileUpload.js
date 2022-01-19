FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 50 / 100,
    imageResizeTargetWidth: 50,
    imageResizeTargetHeight: 100
  })
  
  
FilePond.parse(document.body);