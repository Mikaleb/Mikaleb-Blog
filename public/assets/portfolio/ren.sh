# Initialize counter
counter=1

# For each file in the current directory
for file in *; do
    # If the file is "ren.sh", skip it
    if [ "$file" == "ren.sh" ]; then
        continue
    fi

    # Get the file extension
    ext="${file##*.}"
    # Rename the file to the counter value, preserving the file extension
    mv -- "$file" "$counter.$ext"
    # Increment the counter
    counter=$((counter + 1))
done
