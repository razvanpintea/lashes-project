using APILashes.Data;
using APILashes.Interfaces;
using APILashes.Services;

using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Register settings for BookingDatabaseSettings
builder.Services.Configure<BookingDatabaseSettings>(builder.Configuration.GetSection("MongoDBSettings"));
builder.Services.AddSingleton<IBookingDatabaseSettings>(sp => sp.GetRequiredService<IOptions<BookingDatabaseSettings>>().Value);

// Register settings for LashSetDatabaseSettings
builder.Services.Configure<LashSetDatabaseSettings>(builder.Configuration.GetSection("MongoDBSettings"));
builder.Services.AddSingleton<ILashSetDatabaseSettings>(sp => sp.GetRequiredService<IOptions<LashSetDatabaseSettings>>().Value);

builder.Services.Configure<BookingPortfolioDatabaseSettings>(builder.Configuration.GetSection("MongoDBSettings"));
builder.Services.AddSingleton<IBookingPortfolioDatabaseSettings>(sp => sp.GetRequiredService<IOptions<BookingPortfolioDatabaseSettings>>().Value);

// Register settings for LashSetDatabaseSettings
builder.Services.Configure<LashSetPortfolioDatabaseSettings>(builder.Configuration.GetSection("MongoDBSettings"));
builder.Services.AddSingleton<ILashSetPortfolioDatabaseSettings>(sp => sp.GetRequiredService<IOptions<LashSetPortfolioDatabaseSettings>>().Value);

// Register a single instance of IMongoClient
builder.Services.AddSingleton<IMongoClient>(s =>
    new MongoClient(builder.Configuration.GetValue<string>("MongoDBSettings:ConnectionString")));

// Register your services
builder.Services.AddScoped<IBookingService, BookingService>();
builder.Services.AddScoped<ILashSetService, LashSetService>();
builder.Services.AddScoped<IBookingPortfolioService, BookingServicePortfolio>();
builder.Services.AddScoped<ILashSetPortfolioService, LashSetServicePortfolio>();
builder.Services.AddScoped<IEmailService, EmailService>();  
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000", builder =>
    {
        builder
            .WithOrigins("http://localhost:3000", "https://razwebdev.com")
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

// Rest of your code...


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("AllowLocalhost3000");

app.UseAuthorization();

app.MapControllers();

app.Run();
