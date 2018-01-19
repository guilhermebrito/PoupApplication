package br.poup.app.cucumber.stepdefs;

import br.poup.app.PoupApplicationApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = PoupApplicationApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
