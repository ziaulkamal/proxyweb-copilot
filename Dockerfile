# Gunakan Node.js versi 18-alpine sebagai base image
FROM node:18-alpine

# Set direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json ke dalam container
COPY package.json ./

# Install semua dependensi
RUN npm install

# Salin semua file proyek ke dalam container
COPY . .

# Salin file .env ke dalam container
COPY .env .env

# Expose port internal aplikasi (Express)
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]