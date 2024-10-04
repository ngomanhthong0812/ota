module.exports = {
  content: [
    './**/*.html', // Tìm kiếm tất cả file HTML trong mọi thư mục
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Bạn có thể chỉnh sửa giá trị này để phù hợp với kích thước màn hình lớn hơn.
      },
    },
  },
  plugins: [],
}
