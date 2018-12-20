using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using TrainerSchedule.Models;

namespace TrainerSchedule.Pages.Meets
{
    public class CreateModel : PageModel
    {
        private readonly TrainerSchedule.Models.Context _context;

        public CreateModel(TrainerSchedule.Models.Context context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
        ViewData["ClientID"] = new SelectList(_context.Client, "ClientID", "ClientID");
        ViewData["TrainerID"] = new SelectList(_context.Trainer, "TrainerID", "TrainerID");
            return Page();
        }

        [BindProperty]
        public Meet Meet { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Meet.Add(Meet);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}