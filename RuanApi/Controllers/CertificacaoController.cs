using Microsoft.AspNetCore.Mvc;
using RuanApi.Data;
using RuanApi.Models;

namespace RuanApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CertificacaoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CertificacaoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_context.Certificacoes.ToList());
        }

        [HttpPost]
        public IActionResult Criar(Certificacao certificacao)
        {
            _context.Certificacoes.Add(certificacao);
            _context.SaveChanges();

            return Ok(certificacao);
        }
    }
}