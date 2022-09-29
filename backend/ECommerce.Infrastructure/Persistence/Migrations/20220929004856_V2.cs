using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Persistence.Migrations
{
    public partial class V2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Subtotal_Currency",
                table: "SalesOrders");

            migrationBuilder.DropColumn(
                name: "Price_Currency",
                table: "SalesOrderItems");

            migrationBuilder.DropColumn(
                name: "DefaultPrice_Currency",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "Subtotal_Amount",
                table: "SalesOrders",
                newName: "Subtotal");

            migrationBuilder.RenameColumn(
                name: "Price_Amount",
                table: "SalesOrderItems",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "DefaultPrice_Amount",
                table: "Products",
                newName: "DefaultPrice");

            migrationBuilder.AddColumn<string>(
                name: "CurrencyName",
                table: "SalesOrders",
                type: "TEXT",
                maxLength: 25,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CurrencySymbol",
                table: "SalesOrders",
                type: "TEXT",
                maxLength: 25,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CurrencyName",
                table: "SalesOrderItems",
                type: "TEXT",
                maxLength: 25,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CurrencySymbol",
                table: "SalesOrderItems",
                type: "TEXT",
                maxLength: 25,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CurrencyName",
                table: "Products",
                type: "TEXT",
                maxLength: 25,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CurrencySymbol",
                table: "Products",
                type: "TEXT",
                maxLength: 25,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CurrencyName",
                table: "SalesOrders");

            migrationBuilder.DropColumn(
                name: "CurrencySymbol",
                table: "SalesOrders");

            migrationBuilder.DropColumn(
                name: "CurrencyName",
                table: "SalesOrderItems");

            migrationBuilder.DropColumn(
                name: "CurrencySymbol",
                table: "SalesOrderItems");

            migrationBuilder.DropColumn(
                name: "CurrencyName",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "CurrencySymbol",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "Subtotal",
                table: "SalesOrders",
                newName: "Subtotal_Amount");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "SalesOrderItems",
                newName: "Price_Amount");

            migrationBuilder.RenameColumn(
                name: "DefaultPrice",
                table: "Products",
                newName: "DefaultPrice_Amount");

            migrationBuilder.AddColumn<string>(
                name: "Subtotal_Currency",
                table: "SalesOrders",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Price_Currency",
                table: "SalesOrderItems",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DefaultPrice_Currency",
                table: "Products",
                type: "TEXT",
                nullable: true);
        }
    }
}
