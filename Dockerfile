FROM nginx:1.27-alpine

# Remove default nginx config and static content
RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy portfolio static files
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY docs/ /usr/share/nginx/html/docs/

# Expose port 80 internally
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
