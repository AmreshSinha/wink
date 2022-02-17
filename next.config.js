module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader',
      },
      {
        test: /\.(glb|gltf)$/,
        use: {
          loader: 'file-loader',
        }
      }
    )
    return config
  }
}
