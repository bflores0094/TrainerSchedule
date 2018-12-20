using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrainerSchedule.Models;

namespace TrainerSchedule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeetsController : ControllerBase
    {
        private readonly Context _context;

        public MeetsController(Context context)
        {
            _context = context;
        }

        // GET: api/Meets
        [HttpGet]
        public IEnumerable<Meet> GetMeet()
        {
            return _context.Meet;// Include("Trainer");//.Include("Client");
        }

        // GET: api/Meets/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMeet([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var meet = await _context.Meet.FindAsync(id);

            if (meet == null)
            {
                return NotFound();
            }

            return Ok(meet);
        }

        // PUT: api/Meets/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMeet([FromRoute] int id, [FromBody] Meet meet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != meet.MeetID)
            {
                return BadRequest();
            }

            _context.Entry(meet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MeetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Meets
        [HttpPost]
        public async Task<IActionResult> PostMeet([FromBody] Meet meet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Meet.Add(meet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMeet", new { id = meet.MeetID }, meet);
        }

        // DELETE: api/Meets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMeet([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var meet = await _context.Meet.FindAsync(id);
            if (meet == null)
            {
                return NotFound();
            }

            _context.Meet.Remove(meet);
            await _context.SaveChangesAsync();

            return Ok(meet);
        }

        private bool MeetExists(int id)
        {
            return _context.Meet.Any(e => e.MeetID == id);
        }
    }
}