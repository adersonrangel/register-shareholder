using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace register_shareholder.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;

    public List<string> Empleados { get; set; }

    [BindProperty]
    [Required(ErrorMessage = "El nombre es obligatorio.")]
    public string Nombre { get; set; } = string.Empty;

    [BindProperty]
    [Required(ErrorMessage = "El apellido es obligatorio.")]
    public string Apellido { get; set; } = string.Empty;
    
    [BindProperty]
    [Required(ErrorMessage = "La edad es obligatoria.")]
    public int Edad { get; set; } = 0;

    public IndexModel(ILogger<IndexModel> logger)
    {
        _logger = logger;
        Empleados = new List<string>();
    }

    public void OnGet()
    {
        
    }
}
