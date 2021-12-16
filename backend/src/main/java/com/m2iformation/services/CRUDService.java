package com.m2iformation.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public class CRUDService<T> {

    @Autowired
    MongoRepository<T, String> repo;

    public <S extends T> List<S> saveAll(Iterable<S> entities) {
        return repo.saveAll(entities);
    }

    public List<T> findAll() {
        return repo.findAll();
    }

    public List<T> findAll(Sort sort) {
        return repo.findAll(sort);
    }

    public <S extends T> S insert(S entity) {
        return repo.insert(entity);
    }

    public <S extends T> List<S> insert(Iterable<S> entities) {
        return repo.insert(entities);
    }

    public <S extends T> List<S> findAll(Example<S> example) {
        return repo.findAll(example);
    }

    public <S extends T> List<S> findAll(Example<S> example, Sort sort) {
        return repo.findAll(example, sort);
    }

    public Page<T> findAll(Pageable pageable) {
        return repo.findAll(pageable);
    }

    public <S extends T> S save(S entity) {
        return repo.save(entity);
    }

    public Optional<T> findById(String s) {
        return repo.findById(s);
    }

    public boolean existsById(String s) {
        return repo.existsById(s);
    }

    public Iterable<T> findAllById(Iterable<String> strings) {
        return repo.findAllById(strings);
    }

    public long count() {
        return repo.count();
    }

    public void deleteById(String s) {
        repo.deleteById(s);
    }

    public void delete(T entity) {
        repo.delete(entity);
    }

    public void deleteAllById(Iterable<? extends String> strings) {
        repo.deleteAllById(strings);
    }

    public void deleteAll(Iterable<? extends T> entities) {
        repo.deleteAll(entities);
    }

    public void deleteAll() {
        repo.deleteAll();
    }

    public <S extends T> Optional<S> findOne(Example<S> example) {
        return repo.findOne(example);
    }

    public <S extends T> Page<S> findAll(Example<S> example, Pageable pageable) {
        return repo.findAll(example, pageable);
    }

    public <S extends T> long count(Example<S> example) {
        return repo.count(example);
    }

    public <S extends T> boolean exists(Example<S> example) {
        return repo.exists(example);
    }

    public <S extends T, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return repo.findBy(example, queryFunction);
    }




}
