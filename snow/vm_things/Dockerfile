FROM python:3.9-slim

# Set the working directory to /app inside the container
WORKDIR /app
COPY . /app

# Install any required packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Run script.py when the container launches
CMD ["python", "create_map_vm.py"]


# Copy the service account key into the container
COPY /ee/johan_service_account.json /var/secret/service_account_key.json

# Set the environment variable for the Earth Engine credentials
ENV GOOGLE_APPLICATION_CREDENTIALS=/var/secret/service_account_key.json

