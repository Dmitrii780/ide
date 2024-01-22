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
	c.JSON(http.StatusOK, languages)
}
