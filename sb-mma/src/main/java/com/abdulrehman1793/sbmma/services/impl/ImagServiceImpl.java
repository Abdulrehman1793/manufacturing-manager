package com.abdulrehman1793.sbmma.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ImagServiceImpl implements ImageService {
    @Override
    public String saveImageToDB(MultipartFile imageFile) {
        if (imageFile.isEmpty()) {
            return new ResponseEntity<>("Please select a file to upload.", HttpStatus.BAD_REQUEST);
        }

        // Check if the uploaded file is an image
        if (!Objects.requireNonNull(imageFile.getContentType()).startsWith("image/")) {
            return new ResponseEntity<>("Only image files are allowed.", HttpStatus.BAD_REQUEST);
        }
        return null;
    }
}
