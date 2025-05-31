using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace register_shareholder.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;

    public List<string> Empleados { get; set; }

    public IndexModel(ILogger<IndexModel> logger)
    {
        _logger = logger;
        Empleados = new List<string>();
    }

    public void OnGet()
    {
        
    }
}
