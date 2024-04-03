# Use the official MongoDB image from Docker Hub
FROM mongo:latest

# Create a directory to store MongoDB data
RUN mkdir -p /data/db

# Expose the default MongoDB port
EXPOSE 27017

# Start MongoDB when the container starts
CMD ["mongod"]
