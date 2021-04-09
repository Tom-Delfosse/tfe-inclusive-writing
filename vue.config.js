module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                    @import "@/styles/variables.scss";
                    @import "@/styles/mixins.scss";
                `
      }
    }
  }
}
