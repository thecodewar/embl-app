package com.embl.config;

import cz.jirutka.rsql.parser.RSQLParser;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author Adarsh Khalique
 *
 */
@Configuration
public class RsqlParserConfiguration {

    @Bean
    public RSQLParser rsqlParser(){
        return new RSQLParser();
    }
}
