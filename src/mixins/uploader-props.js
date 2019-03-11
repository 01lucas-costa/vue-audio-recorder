export default {
  props: {
    filename:         { type: String, default: 'record'   },
    headers:          { type: Object, default: () => ({}) },
    uploadUrl:        { type: String                      },
    handlerDataAudio: { type: Boolean, default: false     }
  }
}
