var builder = WebApplication.CreateBuilder(args);

// Adicionar suporte a Controllers
builder.Services.AddControllers();

// Swagger (documentação da API)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Mapear controllers
app.MapControllers();

app.Run();