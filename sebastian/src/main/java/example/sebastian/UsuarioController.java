package example.sebastian;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Permite que Angular entre sin problemas
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    @GetMapping("/data")
    public List<Usuario> getAll() {
        return repository.findAll();
    }
}