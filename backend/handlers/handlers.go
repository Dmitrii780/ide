package handlers

import (
	"ide_backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// TODO: replace with an actual call to database
var languages = []models.Language{
	{Name: "C"},
	{Name: "C++"},
	{Name: "Python"},
	{Name: "Golang"},
	{Name: "Javascript"},
}

func getLanguages(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
	c.JSON(http.StatusOK, languages)
}
